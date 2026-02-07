import React, { useState, useEffect } from "react";
import { Camera, Expand, Image as ImageIcon, X } from "lucide-react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for Lightbox

  // Fetch photos
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://photo-shop-backend-p0zb.onrender.com/api/photos");
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.error("Gallery fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4 md:px-20">

      {/* Header - Simple & Clean */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          The <span className="text-[#9bc7c5]">Gallery.</span>
        </h1>
        <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* The Grid - Optimized for PC and Mobile */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.imageUrl}
                alt={photo.imageName}
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-[#9bc7c5] mb-1">
                  <Camera size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Naveen</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{photo.imageName}</h3>
                <div className="mt-3 flex items-center gap-2 text-white/70 text-xs">
                  <Expand size={14} /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal (Fullscreen View) */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white z-[60]"
          >
            <X size={24} />
          </button>

          {/* Fullscreen Image Container */}
          <div className="relative max-w-5xl max-h-full flex flex-col items-center">
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.imageName}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold">{selectedPhoto.imageName}</h3>
              <p className="text-gray-400 text-sm mt-1">Shot by Naveen</p>
            </div>
          </div>

          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedPhoto(null)}
          ></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && photos.length === 0 && (
        <div className="text-center py-20">
          <ImageIcon size={48} className="mx-auto text-gray-700 mb-4" />
          <p className="text-gray-500 text-lg">No photos found in the collection.</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;