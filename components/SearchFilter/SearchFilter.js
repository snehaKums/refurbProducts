import React from 'react';

export default function SearchAndFilter({value,search,filter}){
    return(
        <div className="relative flex min-w-full justify-center space-x-7">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="w-3/12 pl-2 border-2 rounded-md border-gray-500 border-solid h-11 bg-gray-100 text-xl hover:border-blue-500 focus:border-blue-500"
                            placeholder="Search for Products..."
                            value={value}
                            onChange={search}
                        />
                    <div className="w-3/12">
                        <select
                            onChange={filter}
                            className="border-2 pl-2 rounded-md border-gray-500 border-solid h-11 w-full bg-gray-100 text-xl hover:border-blue-500 focus:border-blue-500"
                            aria-label="Filter Products By Category"
                        >
                            <option value="All">All Category</option>
                            <option value="Mobile Phones">Mobile Phones</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="headphones">Headphones/Earphones</option>
                        </select>
                    </div>
        </div>
    )
}