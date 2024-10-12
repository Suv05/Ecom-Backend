const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name:  'dsxochw3u',
    api_key:  '471168476963898',
    api_secret: 'F4fQxNnO-zwZg_41V7z_eCZ8ztw'
});

const storage = multer.memoryStorage(); // multer create temporary memory storage

async function handleImageUploadUtil(file) {
    try {
        const result = await cloudinary.uploader.upload(file, {
            resource_type: 'auto', 
        });
        return result;
    } catch (error) {
        throw new Error('Image upload failed: ' + error.message);
    }
}
const upload = multer({ storage });

module.exports = { upload, handleImageUploadUtil };
