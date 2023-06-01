import Layout from '@/components/Layout';
import MemberCard from '@/components/MemberCard';
import NavFunction from '@/components/NavFunction';
import { useEffect, useState } from 'react';

interface MemberI {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
  }
  
  interface ApiResponse {
    status: string;
    members: MemberI[];
  }

const Member: React.FC = () => {
      const [users, setUsers] = useState<MemberI[]>([]);
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/endpoints');
            const data:ApiResponse = await response.json();
    
            // Verificar si la respuesta contiene datos válidos
            setUsers(data.members);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchUsers();
      }, []);

  return  (
        <Layout
            pagina="Miembros"
        >
            <h1 className='text-4xl text-center text-sky-300 my-3'>Miembros de Gym</h1>
            <NavFunction/>
            <div className="flex flex-col justify-center items-center h-100% md:grid grid-cols-2 gap-4 ">
                {users.map((member) => (
                    <MemberCard key={member.id} user={member} />
                ))}
            </div>
        </Layout>
    );
}

export default Member