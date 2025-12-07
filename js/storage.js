export function getData() {
    const data = localStorage.getItem("extensionsData");
    return data ? JSON.parse(data) : [];
  }