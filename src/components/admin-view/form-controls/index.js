'use client'

export default function FormControls({ controls, formData, setFormData }) {
    console.log(formData);
    
    return (
        controls.map((item, i) => (
            <div key={i} className="mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    {item.label}
                </label>
                <input
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
                    placeholder={item.placeholder}
                    type={item.type}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={(e) => setFormData({
                        ...formData,
                        [item.name]: e.target.value,
                    })}
                >
                    {}
                </input>
            </div>
        ))
    )

}