export async function processData(input) {
  const response = await fetch('https://bajajfinservhealth.onrender.com/bfhl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: input,  
  });
  
  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}