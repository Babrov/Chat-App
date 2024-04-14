'use client';

import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {signIn} from 'next-auth/react';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

interface LoginFormValues {
    email: string;
    password: string;
}


const initialLoginValues: LoginFormValues = {email: '', password: ''};

export default function LoginPage() {
    const handleSubmit = async (
        values: LoginFormValues,
        {setStatus}: FormikHelpers<LoginFormValues>
    ) => {
        const response = await signIn('credentials', {
            email: values.email,
            password: values.password,
        });

        if (response?.error) {
            setStatus('Oops! The email or password you entered is incorrect. Please try again.'); // Informal error message
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
                </div>
                <Formik
                    initialValues={initialLoginValues}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting, status}) => (
                        <Form className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <Field type="email" name="email" id="email-address" autoComplete="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Email address"/>
                                <ErrorMessage name="email" component="div" className="text-red-500"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <Field type="password" name="password" id="password" autoComplete="current-password"
                                       required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Password"/>
                                <ErrorMessage name="password" component="div" className="text-red-500"/>
                            </div>
                            <div>
                                <button type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={isSubmitting}>
                                    Sign in
                                </button>
                            </div>
                            {status && <div className="mt-4 text-red-600">{status}</div>}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
