const { VITE_API_URL } = import.meta.env;

export const signUpService = async (username, email, password) => {
  const res = await fetch(`${VITE_API_URL}/users/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const signInService = async (email, password) => {
  const res = await fetch(`${VITE_API_URL}/users/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return {
    token: body.data.token,
    message: body.message,
  };
};

export const activateUserService = async (registrationCode) => {
  const res = await fetch(
    `${VITE_API_URL}/users/validate/${registrationCode}`,
    {
      method: 'put',
    }
  );

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const getPrivateProfileService = async (authToken) => {
  const res = await fetch(`${VITE_API_URL}/users`, {
    headers: {
      Authorization: authToken,
    },
  });

  const body = await res.json();

  return body.data?.user;
};

export const selectUsersService = async (authToken) => {
  const res = await fetch(`${VITE_API_URL}/allusers`, {
    headers: {
      Authorization: authToken,
    },
  });

  const body = await res.json();

  return body.data?.users;
};

export const recoverPassword = async (email) => {
  const res = await fetch(`${VITE_API_URL}/users/password/recover`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const changePassword = async (email, newPass, recoverPassCode) => {
  const res = await fetch(`${VITE_API_URL}/users/password/edit`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      newPass,
      recoverPassCode,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const updateUsernameAndEmailService = async (
  username,
  email,
  password,
  authToken
) => {
  const res = await fetch(`${VITE_API_URL}/users/edit`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return {
    message: body.message,
    user: body.data.user,
  };
};

export const updateAvatarService = async (photo, authToken) => {
  const formData = new FormData();

  formData.append('photo', photo);

  const res = await fetch(`${VITE_API_URL}/users/avatar/edit`, {
    method: 'put',
    headers: {
      Authorization: authToken,
    },
    body: formData,
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return {
    message: body.message,
    avatarName: body.data.avatar.name,
  };
};

export const promocionarACoordinador = async (userId, authToken) => {
  const res = await fetch(`${VITE_API_URL}/users/role/${userId}`, {
    method: 'put',
    headers: {
      Authorization: authToken,
    },
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};
