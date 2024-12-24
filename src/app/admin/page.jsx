'use client'

import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/project"
import { useState } from "react"

const initialHomeFormData = {
    heading: "",
    summary: ""
}

export default function AdminView() {

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            Component: <AdminHomeView 
                formData={homeViewFormData} 
                setFormData={setHomeViewFormData} 
            />,
        },
        {
            id: 'about',
            label: 'About',
            Component: <AdminAboutView />,
        },
        {
            id: 'experience',
            label: 'Experience',
            Component: <AdminExperienceView />,
        },
        {
            id: 'education',
            label: 'Education',
            Component: <AdminEducationView />,
        },
        {
            id: 'project',
            label: 'Project',
            Component: <AdminProjectView />,
        },
        {
            id: 'contact',
            label: 'Contact',
            Component: <AdminContactView />,
        },
    ]

    return (
        <div className="border-b border-gray-400">
            <nav 
                className="-mb-0.5 flex justify-center space-x-6" 
                role="tablist"
            >
                {menuItem.map((Item) => (
                    <button 
                        key={Item.id} 
                        type="button" 
                        className="p-4 font-bold text-xl text-black"
                        onClick={() => {
                            setCurrentSelectedTab(Item.id)
                        }}                    
                    >
                        {Item.label}
                    </button>
                ))}
            </nav>
            <div className="mt-10 p-10">
                {
                    menuItem.map((item) => (
                        item.id === currentSelectedTab && item.Component
                    ))
                }
            </div>
        </div>
    )

}