import { NextApiRequest, NextApiResponse } from 'next';
import { responseMembers } from './response';

type Member = {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
};

type ApiResponse = {
  status: string;
  members: Member[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  res.status(200).json(responseMembers);
}

export function handlerGetMemberById(
  req: NextApiRequest,
  res: NextApiResponse<Member | { error: string }>
) {
  const memberId = Number(req.query.id)
  const member = responseMembers.members.find(m => m.id === memberId)
  if (member) {
    res.status(200).json(member)
  } else {
    res.status(404).json({ error: `No se encontró ningún miembro con el ID ${memberId}` })
  }
}

export function handlerAddMember(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { error: string }>
) {
  const newMember = req.body as Member
  if (!newMember || !newMember.name || !newMember.email) {
    res.status(400).json({ error: 'Faltan campos requeridos' })
    return
  }
  const maxId = Math.max(...responseMembers.members.map(m => m.id))
  const memberWithId = { ...newMember, id: maxId + 1 }
  responseMembers.members.push(memberWithId)
  res.status(200).json(responseMembers)
}

export function handlerUpdateMember(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { error: string }>
) {
  const memberId = Number(req.query.id)
  const memberIndex = responseMembers.members.findIndex(m => m.id === memberId)
  if (memberIndex === -1) {
    res.status(404).json({ error: `No se encontró ningún miembro con el ID ${memberId}` })
    return
  }
  const updatedMember = req.body as Member
  if (!updatedMember || !updatedMember.name || !updatedMember.email) {
    res.status(400).json({ error: 'Faltan campos requeridos' })
    return
  }
  responseMembers.members[memberIndex] = { ...responseMembers.members[memberIndex], ...updatedMember }
  res.status(200).json(responseMembers)
}

export function handlerDeleteMember(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { error: string }>
) {
  const memberId = Number(req.query.id)
  const memberIndex = responseMembers.members.findIndex(m => m.id === memberId)
  if (memberIndex === -1) {
    res.status(404).json({ error: `No se encontró ningún miembro con el ID ${memberId}` })
    return
  }
  responseMembers.members.splice(memberIndex, 1)
  res.status(200).json(responseMembers)
}
