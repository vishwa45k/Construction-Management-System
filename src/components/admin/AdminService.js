import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function AdminService() {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [desc, setDesc] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:3003/service');
                const data = await response.json();

                if (data.success) {
                    setServices(data.services); // Update services state with fetched data
                } else {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message || 'Could not fetch services.',
                    });
                }
            } catch (error) {
                console.error('Error fetching services:', error);
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while fetching services!',
                });
            }
        };

        fetchServices(); 
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('desc', desc);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:3003/adminservice', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {

                await Swal.fire({
                    icon: 'success',
                    title: 'Service Added Successfully!',
                    text: 'The service has been added to the database.',
                });


                setName('');
                setDesc('');
                setImage(null);

                
                const updatedResponse = await fetch('http://localhost:3003/adminservice');
                const updatedData = await updatedResponse.json();
                if (updatedData.success) {
                    setServices(updatedData.services); 
                }
            } else {

                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message || 'Something went wrong!',
                });
            }
        } catch (e) {
            console.error('Error in adding service:', e);
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding the service!',
            });
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-5'>
                        <div className='card' style={{ width: "480px" }}>
                            <form onSubmit={handleSubmit}>
                                <div className='col mx-5 my-3'>
                                    <label className='me-2'>Name:</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id="name"
                                        className='ms-5'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} 
                                        required
                                    />
                                </div>
                                <div className='col ms-5 my-3'>
                                    <label className='me-1'>Image:</label>
                                    <input
                                        type='file'
                                        name='image'
                                        id="image"
                                        className='ms-5'
                                        onChange={(e) => setImage(e.target.files[0])}
                                        required
                                    />
                                </div>
                                <div className='col mx-5 my-3'>
                                    <label>Description:</label>
                                    <input
                                        type='text'
                                        name='desc'
                                        id="desc"
                                        className='ms-3'
                                        onChange={(e) => setDesc(e.target.value)}
                                        value={desc} // Bind value to state
                                        required
                                    />
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-1 mx-auto my-3'>
                                        <button className='btn btn-success btn-sm' type="submit">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            
                <div className='row justify-content-center my-5'>
    <div className='col-12'>
        {services.length > 0 ? (
            <div className='row'>
                {services.map((service) => (
                    <div className='col-3 mb-4' key={service._id}> {/* Adjust col-3 for 4 cards per row, or use col-4 for 3 cards per row */}
                        <div className='card'>
                            {service.image && (
                                <img
                                    className='card-img-top img-fluid'
                                    src={service.image} 
                                    alt={service.name}
                                    style={{ maxWidth: '200px', height: '200px' }} // Ensure it fits the card
                                />
                            )}
                            <div className='card-body'>
                                <h5 className='card-title'>{service.name}</h5>
                                <p className='card-text'>{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p>No services available.</p>
        )}
    </div>
</div>

                </div>
           
        </>
    );
}

export default AdminService;
