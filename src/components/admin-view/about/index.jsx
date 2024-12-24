'use client'

import FormControls from "../form-controls";

const controls = [
    {
        name: 'aboutMe',
        placeholder: 'About Me',
        type: 'text',
        label: 'About Me',
    },
    {
        name: 'noOfProjects',
        placeholder: 'No Of Projects',
        type: 'text',
        label: 'No Of Projects',
    },
    {
        name: 'yearOfExperience',
        placeholder: 'Year Of Experience',
        type: 'text',
        label: 'Year Of Experience',
    },
    {
        name: 'noOfClients',
        placeholder: 'No Of Clients',
        type: 'text',
        label: 'No Of Clients',
    },
    {
        name: 'skills',
        placeholder: 'Skills',
        type: 'text',
        label: 'Skills',
    }
]

export default function AdminAboutView({ formData, setFormData }) {
    return (
        <div className="w-full">
            <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
                <FormControls 
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />

                <button className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-base focus:bg-green-800 rounded-md">Add Info</button>
            </div>
        </div>
    );
}