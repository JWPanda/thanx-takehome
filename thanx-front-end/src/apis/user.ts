
export async function getUser() {
  try {
    const apiData = await fetch('http://127.0.0.1:3000/api/v1/users/1');
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}