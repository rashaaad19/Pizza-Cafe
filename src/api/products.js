export const fetchProducts=async()=>{
  const response =   await fetch('https://shrouded-determined-dollar.glitch.me/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
}

export const fetchOneProduct=async(id)=>{
  const response = await fetch(`https://shrouded-determined-dollar.glitch.me/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await response.json();
  console.log(data)

  return data;
}


export const addProduct = async (product) => {
  const response = await fetch('https://shrouded-determined-dollar.glitch.me/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to add product');
  }

  const data = await response.json();
  return data;
}

export const editProduct=async(id, product) => {
  const response = await fetch(`https://shrouded-determined-dollar.glitch.me/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to edit product');
  }

  const data = await response.json();
  return data;
}

export const deleteProduct=async(product)=>{
await fetch(`https://shrouded-determined-dollar.glitch.me/products/${product.id}`, {
    method: 'DELETE',
  });
  return product.id;
}