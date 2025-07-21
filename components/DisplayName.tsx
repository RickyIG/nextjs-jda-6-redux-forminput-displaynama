'use client';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { Card, CardContent } from '@/components/ui/card';

export default function DisplayName() {
  const name = useSelector((state: RootState) => state.name.name);
  return (
    <Card className="mt-6 w-full max-w-md">
      <CardContent className="text-center py-6">
        <p className="text-gray-700 text-lg">Nama dari global state:</p>
        <p className="text-blue-600 font-semibold text-xl mt-2">
          {name || 'Belum ada nama yang dimasukkan'}
        </p>
      </CardContent>
    </Card>
  );
}