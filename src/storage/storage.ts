export const save = (key: string, json: { [key: string]: any }, expirationMin?: number) => {
  const ms = (expirationMin || 0) * 60 * 1000;
  const record = {
    value: JSON.stringify(json),
    timestamp: new Date().getTime() + ms,
  };
  if (ms) {
    localStorage.setItem(key, JSON.stringify(record));
    return;
  }
  sessionStorage.setItem(key, JSON.stringify(record));
};

export const remove = (key: string) => {
  if (!localStorage || !sessionStorage) return;
  if (localStorage.getItem(key)) localStorage.removeItem(key);
  if (sessionStorage.getItem(key)) sessionStorage.removeItem(key);
};

export const load = (key: string) => {
  if (!localStorage || !sessionStorage) return null;
  if (localStorage.getItem(key)) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    const record = JSON.parse(value);
    if (!record) return null;
    if (new Date().getTime() < record.timestamp) {
      return JSON.parse(record.value);
    }
    remove(key);
  } else if (sessionStorage.getItem(key)) {
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    const record = JSON.parse(value);
    if (!record) return null;
    return JSON.parse(record.value);
  }
  return null;
};

export const isExpired = (key: string) => {
  if (!localStorage || !sessionStorage) return false;
  if (localStorage.getItem(key)) {
    const value = localStorage.getItem(key);
    if (!value) return false;
    const record = JSON.parse(value);
    if (!record) return false;
    if (new Date().getTime() > record.timestamp) {
      return true;
    }
  }
  return false;
};

export const saveOnlyKey = (key: string) => {
  const record = {
    value: JSON.stringify("true"),
    timestamp: new Date().getTime(),
  };
  localStorage.setItem(key, JSON.stringify(record));
};

export const loadOnlyKey = (key: string) => {
  if (!localStorage || !sessionStorage) return null;
  if (localStorage.getItem(key)) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    const record = JSON.parse(value);
    if (!record) return null;
    return JSON.parse(record.value);
  }
  return null;
};
