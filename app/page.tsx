import FormInput from '@/components/FormInput';
import DisplayName from '@/components/DisplayName';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-2xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 flex items-center justify-center gap-3">
          <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Logo" className="w-8 h-8" />
          Contoh Global State dengan Redux
          <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Logo" className="w-8 h-8" />
        </h1>
        <h2 className="text-xl font-bold text-center mb-6 text-blue-700 flex justify-center items-center gap-2">Created by: Ricky Indra Gunawan</h2>
        <FormInput />
        <DisplayName />
      </div>
    </main>
  );
}
