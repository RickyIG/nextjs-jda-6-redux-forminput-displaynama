'use client';
import { useDispatch } from 'react-redux';
import { setName } from '../store/nameSlice';
import { useState } from 'react';
import type { AppDispatch } from '../store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FormInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setName(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Masukkan nama..."
      />
      <Button type="submit">Simpan Nama</Button>
    </form>
  );
}
