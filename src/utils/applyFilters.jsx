  const applyFilters = (campers) => {
    let filtered = campers;
    const {filter} = campers
    // Filter by location
    if (filter.location !== "") {
      filtered = filtered.filter((item) => item.location === filter.location);
    }

    // Filter by equipment
    if (filter.equipment.length > 0) {
      filtered = filtered.filter((item) => {
        return filter.equipment.every((eq) => {
          switch (eq.toLowerCase()) {
            case "transmission":
              return item.transmission !== "manual";
            case "ac":
              return item.AC === "AC";
            case "shower":
              return item.bathroom === true;
            case "kitchen":
              return item.kitchen === true;
            case "tv":
              return item.TV === "TV";
            default:
              return false;
          }
        });
      });
    }

    // Filter by type
    if (filter.type !== "") {
      filtered = filtered.filter((item) => item.form === filter.type);
    }

    return filtered;
  };

  export default applyFilters;