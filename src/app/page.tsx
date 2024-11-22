import { Filter } from '@/components/Filter'
import { Filters } from '../constants/constants'
import { Products } from '@/components/Products'
import { products } from '../mocks/products.json'
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
					className='hover:scale-110'
					src='/images/Next.svg'
					alt='next category'
					width={60}
					height={60}
				/>
			</div>
			<div className=' text-[#064E3B] grid grid-cols-4 gap-4 justify-center items-center p-3'>
				{products.map((product) => {
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
