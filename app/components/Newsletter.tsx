import React, { useState } from 'react';

interface SubscriptionFormData {
  email: string;
}

interface SubscriptionFormErrors {
  email?: string;
}

const NewsletterSubscription: React.FC = () => {
  const [formData, setFormData] = useState<SubscriptionFormData>({
    email: '',
  });

  const [errors, setErrors] = useState<SubscriptionFormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const validateEmail = (email: string): boolean => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: SubscriptionFormErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, display success message
    console.log('Email submitted:', formData.email);
    setSuccessMessage('Thank you for subscribing to our newsletter!');
    setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    // Reset form
    setFormData({
      email: '',
    });
  };

  return (
    <div className="text-center ">
      <div className="lg:flex lg:justify-center lg:items-center gap-8">
      <div className="text-white text-lg font-medium font-['Clash Display'] text-center mt-2">Subscribe to our Newslater</div>
        <form action="" onSubmit={handleSubmit}>
         
      
      <input type="text" name="email" id="email"  className="p-2 w-full round-[10px] xl:email" placeholder="Your email" value={formData.email} onChange={handleChange} />
      <div>
      <button type='submit'className=" relative float-right -mt-9 mr-4 ">
      <img src="/Send Icon.svg" alt="" className='' />
      </button>
      </div>
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      </form>
      
      {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
      
    </div>
    </div>
  );
};

export default NewsletterSubscription;