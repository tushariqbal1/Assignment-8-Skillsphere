'use client';

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function EditProfile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        authClient.getSession().then(({ data }) => {
            if (data?.user) {
                setUser(data.user);
                setName(data.user.name || '');
            }
        });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        alert("Profile updated successfully!");
        window.location.href = '/profile';
    };

    return (
        <>
      
            <div className="min-h-screen bg-base-200 flex items-center justify-center py-12">
                <div className="card w-full max-w-lg bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-8">Update Information</h2>

                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div>
                                <label className="label">Profile Picture URL</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="https://example.com/image.jpg"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="label">Full Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Link href="/profile" className="btn btn-ghost flex-1">
                                    Cancel
                                </Link>
                                <button type="submit" className="btn btn-primary flex-1" disabled={loading}>
                                    {loading ? "Updating..." : "Update Information"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}