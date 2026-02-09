export const getItems = async (req, res) => {
  try {
    const { category, eco, search } = req.query;

    let filter = {};

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by eco-friendly
    if (eco === "true") {
      filter.isEcoFriendly = true;
    }

    if (eco === "false") {
      filter.isEcoFriendly = false;
    }

    // Search by name (case-insensitive)
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const items = await Item.find(filter);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
