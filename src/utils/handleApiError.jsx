// src/utils/handleApiError.js
export const handleApiError = (error) => {
    if (error.response) {
      alert(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else {
      alert("Network error or server not responding");
    }
  };
  