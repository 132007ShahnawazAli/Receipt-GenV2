import Link from 'next/link' //SHUKLA DONT FORGOT TO IMPORT THIS
import React from 'react'

function Signup() {
    return (
        <div className=" bg-(--background) flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full flex flex-col items-center w-full">
                <h2 className="tablet:font-medium font-semibold text-(--primary-text) tablet:w-full text-5xl tablet:text-5xl tracking-tighter text-center">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-(--secondary-text) max-w">
                    Or{" "}
                    <Link href="/login" className="font-medium text-(--accent-text) hover:text-(--accent-text)/80">
                        sign in to your account
                    </Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-(--background) py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-(--secondary-text)"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required=""
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-(--secondary-text)/70 placeholder-(--secondary-text)/70 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-(--secondary-text)"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required=""
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-(--secondary-text)/70 placeholder-(--secondary-text)/70 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-(--secondary-text)"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required=""
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-(--secondary-text)/70 placeholder-(--secondary-text)/70 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Create a password"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="confirm_password"
                                className="block text-sm font-medium text-(--secondary-text)"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    autoComplete="new-password"
                                    required=""
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-(--secondary-text)/70 placeholder-(--secondary-text)/70 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm your password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-(--accent-text) hover:bg-(--accent-text)/80  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default Signup
