/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  return (
    <Link href="/perfil">
      <img
        src={'/images/avatar.png'}
        alt="Avatar do usuário"
        className={`h-10 w-10 rounded-full cursor-pointer 
            ${props.className}
        `}
      />
    </Link>
  )
}
