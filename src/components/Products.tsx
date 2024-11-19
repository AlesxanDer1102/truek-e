import { ProductCard } from '@/app/types/types'
import Image from 'next/image'

export const Products = ({
	nombre,
	image,
	estado,
	propietario,
	numero_de_estrellas
}: ProductCard) => {
	return (
		<div className='flex flex-col text-[#064E3B] rounded-lg  border-black shadow-lg p-4 hover:shadow-xl transition-shadow'>
			<div className='relative w-[220px] h-[270px]'>
				<Image
					className='rounded-lg object-cover'
					src={image}
					alt={nombre}
					fill
					sizes='(max-width: 320px) 100vw'
				/>
			</div>
			<div className='flex flex-col justify-center text-left'>
				<strong>{nombre}</strong>
				<span>Estado: {estado}</span>
				<span>Usuario : {propietario}</span>
			</div>
			<div className='flex flex-row'>
				{[...Array(5)].map((_, index) => (
					<Image
						key={index}
						src={
							index < numero_de_estrellas
								? '/images/Star-fill.svg'
								: '/images/Star-blank.svg'
						}
						alt={`estrella ${index + 1}`}
						width={22}
						height={22}
					/>
				))}
			</div>
			<span>{numero_de_estrellas} estrellas</span>
		</div>
	)
}
