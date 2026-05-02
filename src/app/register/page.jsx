'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: signUpError } = await authClient.signUp.email({
                email,
                password,
                name,
            });

            if (signUpError) {
                setError(signUpError.message);
            } else {
                alert("Account created successfully! Please login.");
                window.location.href = '/login';
            }
        } catch (err) {
            setError("Registration failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
   
            <div className="min-h-screen flex items-center justify-center bg-base-200 py-12">
                <div className="card w-full max-w-md bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>

                        {error && <div className="alert alert-error mb-4">{error}</div>}

                        <form onSubmit={handleRegister} className="space-y-6">
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

                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                                {loading ? "Creating Account..." : "Register"}
                            </button>
                        </form>

                        <div className="text-center mt-6">
                            Already have an account? <Link href="/login" className="text-primary hover:underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}