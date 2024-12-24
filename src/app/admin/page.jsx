'use client'

import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/project"

export default function AdminView() {

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            Component: <AdminHomeView />,
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
            <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
                {menuItem.map((Item) => (
                    <button 
                        key={Item.id} 
                        type="button" 
                        className="p-4 font-bold text-xl text-black"
                    >
                        {Item.label}
                    </button>
                ))}
            </nav>
            <div className="mt-10 p-10">

            </div>
        </div>
    )

}