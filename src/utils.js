export const sendData = async (url, body, token) => {
  const header = token
    ? {
        Authorization: token,
      }
    : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log(data);
    } else {
      throw new Error('Process failed');
    }
  } catch (error) {
    console.error(error);
  }
};

export async function refreshTokens(url, body) {
  // console.log(url, body)
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getNewTokens(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
