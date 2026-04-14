import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signup = () => {
    const navigate = useNavigate();
    const { signup, loading, error } = useAuth();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        father_name: "",
        phone: "",
        password: "",
        password_confirmation: "",
        gender: "",
        birth_date: "",
        region: "",
        district: "",
    });
    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setFormError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (
            !formData.first_name ||
            !formData.last_name ||
            !formData.phone ||
            !formData.password
        ) {
            setFormError("Please fill all required fields");
            return;
        }

        if (formData.password !== formData.password_confirmation) {
            setFormError("Passwords do not match");
            return;
        }

        try {
            await signup(formData);
            navigate("/dashboard", { replace: true });
        } catch (err) {
            const msg = err?.response?.data?.message || err?.message || "Signup failed. Please try again.";
            setFormError(msg);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
                    <p className="mt-2 text-gray-600">Create your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {(formError || error) && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
                            {formError || error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="John"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="father_name" className="block text-sm font-medium text-gray-700 mb-1">
                                Father's Name
                            </label>
                            <input
                                type="text"
                                id="father_name"
                                name="father_name"
                                value={formData.father_name}
                                onChange={handleChange}
                                placeholder="Father's Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+8800000000"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="birth_date" className="block text-sm font-medium text-gray-700 mb-1">
                                Birth Date
                            </label>
                            <input
                                type="date"
                                id="birth_date"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                                Region
                            </label>
                            <input
                                type="text"
                                id="region"
                                name="region"
                                value={formData.region}
                                onChange={handleChange}
                                placeholder="Region"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                                District
                            </label>
                            <input
                                type="text"
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                placeholder="District"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password *
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password *
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 transition"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
