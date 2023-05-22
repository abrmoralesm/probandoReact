import axios from "axios";

const MET_API_BASE_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1";

export const getHighlightedImages = async () => {
  try {
    const response = await axios.get(
      `${MET_API_BASE_URL}/search?isHighlight=true&hasImages=true`
    );

    const { objectIDs } = response.data;

    if (objectIDs && Array.isArray(objectIDs)) {
      const promises = objectIDs.map(async (objectID) => {
        const objectResponse = await axios.get(
          `${MET_API_BASE_URL}/objects/${objectID}`
        );

        const { primaryImage } = objectResponse.data;

        if (primaryImage) {
          return primaryImage;
        }
      });

      const images = await Promise.all(promises);
      return images.filter((image) => image !== undefined);
    } else {
      console.error(
        "Invalid response data: objectIDs not found or not an array"
      );
      return [];
    }
  } catch (error) {
    console.error("Error fetching highlighted images:", error);
    return [];
  }
};

// Resto del código...

export const getRandomPaintings = async (count) => {
  try {
    const response = await axios.get(
      `${MET_API_BASE_URL}/search?medium=Paintings&hasImages=true&pageSize=${count}&q=*`
    );
    const { objectIDs } = response.data;

    const randomPaintingIDs = getRandomIDs(objectIDs, count);

    const promises = randomPaintingIDs.map(async (objectID) => {
      const paintingResponse = await axios.get(
        `${MET_API_BASE_URL}/objects/${objectID}`
      );
      return paintingResponse.data;
    });

    const paintings = await Promise.all(promises);
    return paintings;
  } catch (error) {
    console.error("Error fetching random paintings:", error);
    return [];
  }
};

const getRandomIDs = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getPaintingImages = async (count) => {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?classification=Paintings&hasImages=true&q=`
    );
    const data = await response.json();
    const objectIDs = data.objectIDs.slice(0, count);
    const imagePromises = objectIDs.map((objectID) =>
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      ).then((response) => response.json())
    );
    const imageResponses = await Promise.all(imagePromises);
    const images = imageResponses
      .filter((image) => image.primaryImageSmall)
      .map((image) => ({
        objectID: image.objectID,
        primaryImageSmall: image.primaryImageSmall,
        title: image.title,
      }));
    return images;
  } catch (error) {
    console.error("Error fetching painting images:", error);
    return [];
  }
};

// Función para obtener detalles de una imagen por su objectId
export const getImageDetails = async (objectId) => {
  try {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getDepartments = async () => {
  try {
    const response = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/departments"
    );
    return response.data.departments;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getRandomImages = async (count) => {
  try {
    const response = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );
    const objectIDs = response.data.objectIDs;
    const randomIDs = objectIDs.sort(() => 0.5 - Math.random()).slice(0, count);
    const promises = randomIDs.map((id) =>
      axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`

        
      )
    );
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getDepartmentImages = async (departmentId, count) => {
  try {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
    );
    const objectIDs = response.data.objectIDs;
    const promises = objectIDs
      .slice(0, count)
      .map((id) =>
        axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        )
      );
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
