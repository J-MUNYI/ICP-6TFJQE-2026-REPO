import Item from "../models/Item.js";

/**
 * CREATE ITEM
 * POST /api/items
 */
export const createItem = async (req, res) => {
  try {
    const { name, description, category, isEcoFriendly, ecoScore } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Name and category are required",
      });
    }

    const newItem = new Item({
      name,
      description,
      category,
      isEcoFriendly,
      ecoScore,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET ALL ITEMS (FILTERING + PAGINATION)
 * GET /api/items
 */
export const getItems = async (req, res) => {
  try {
    const {
      category,
      eco,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter eco-friendly
    if (eco === "true") {
      query.isEcoFriendly = true;
    }

    // Search by name
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const skip = (page - 1) * limit;

    const items = await Item.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const totalItems = await Item.countDocuments(query);

    res.status(200).json({
      totalItems,
      currentPage: Number(page),
      totalPages: Math.ceil(totalItems / limit),
      items,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET ITEM BY ID
 * GET /api/items/:id
 */
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Invalid item ID" });
  }
};

/**
 * DELETE ITEM
 * DELETE /api/items/:id
 */
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
