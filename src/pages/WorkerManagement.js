import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const workers = [
  {
    id: 1,
    name: 'Alice Johnson',
    skills: ['UI/UX', 'Frontend'],
    availability: 'Available',
    experience: '5 years',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: 2,
    name: 'Bob Smith',
    skills: ['Backend', 'Database'],
    availability: 'Busy',
    experience: '3 years',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    id: 3,
    name: 'Carol Williams',
    skills: ['QA', 'Testing'],
    availability: 'Available',
    experience: '4 years',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  },
];

const skillOptions = ['UI/UX', 'Frontend', 'Backend', 'Database', 'QA', 'Testing'];

export default function WorkerManagement() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWorker, setNewWorker] = useState({
    name: '',
    skills: [],
    availability: 'Available',
    experience: '',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' // Default image
  });

  const handleAddWorker = (e) => {
    e.preventDefault();
    // TODO: Implement actual worker addition
    setShowAddModal(false);
    setNewWorker({
      name: '',
      skills: [],
      availability: 'Available',
      experience: '',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    });
  };

  const handleSkillToggle = (skill) => {
    setNewWorker(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Worker Management</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Worker
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workers.map((worker) => (
          <div
            key={worker.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={worker.image} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{worker.name}</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {worker.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  worker.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {worker.availability}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{worker.experience}</p>
            </div>
            <button
              onClick={() => {
                setSelectedWorker(worker);
                setIsEditing(true);
              }}
              className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Add Worker Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Worker</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleAddWorker} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newWorker.name}
                  onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skillOptions.map((skill) => (
                    <label
                      key={skill}
                      className="inline-flex items-center"
                    >
                      <input
                        type="checkbox"
                        checked={newWorker.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                  Availability
                </label>
                <select
                  id="availability"
                  value={newWorker.availability}
                  onChange={(e) => setNewWorker({ ...newWorker, availability: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option value="Available">Available</option>
                  <option value="Busy">Busy</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  value={newWorker.experience}
                  onChange={(e) => setNewWorker({ ...newWorker, experience: e.target.value })}
                  placeholder="e.g., 5 years"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                >
                  Add Worker
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}