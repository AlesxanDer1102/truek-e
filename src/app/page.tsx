import { Filter } from '@/components/Filter'
import { Filters } from './constants/constants'
import { Products } from '@/components/Products'
import { products } from './mocks/products.json'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='min-h-screen w-full bg-[#F5F5F5]'>
			<div className='h-1/4 text-black flex flex-row gap-8 justify-center items-center'>
				{Filters.map((filter) => (
					<Filter
						key={filter.index}
						{...filter}
					/>
				))}
				<Image
					src='/images/Next.svg'
					alt='next category'
					width={60}
					height={60}
				/>
				<div className='rounded-full border-2 border-neutral-600 items-center flex flex-row px-4 py-2'>
					<Image
						src='/images/Filters.svg'
						alt='filtros'
						width={60}
						height={60}
					/>
					<span>Filtros</span>
				</div>
			</div>
			<div className='h-3/4 text-[#064E3B] flex flex-row gap-4 justify-center items-center'>
				{products.slice(0, 4).map((product) => {
					return (
						<Products
							key={product.id}
							{...product}
						/>
					)
				})}
			</div>
		</div>
	)
}
