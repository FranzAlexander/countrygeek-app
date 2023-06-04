export async function GET({ locals: { supabase }, params }) {
	const categoryName = params.slug;
    
    const { data: category } = await supabase
		.from('category')
		.select('id')
		.eq('name', categoryName)
		.single();
}
