import React, { useState, useEffect } from "react";
import { Upload, Trash2, Image as ImageIcon, LogOut, Plus, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  // 1. Fetch Photos from your "getAllPhotos" Backend Route
  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/photos");
      const data = await response.json();
      setPhotos(data);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  useEffect(() => { fetchPhotos(); }, []);

  // 2. Handle Upload (Triggering your "uploadPhoto" Backend Route)
  const handleUpload = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/photos/upload", {
        method: "POST",
        body: formData,
        credentials: "include", // Send auth cookie
      });
      if (res.ok) {
        fetchPhotos(); // Refresh gallery
        alert("Photo added to ImageKit!");
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  // 3. Handle Delete (Triggering your "deletePhoto" Backend Route)
  const handleDelete = async (id) => {
    if (window.confirm("Delete this photo from ImageKit and DB?")) {
      try {
        await fetch(`/api/photos/${id}`, {
          method: "DELETE",
          credentials: "include", // Send auth cookie
        });
        setPhotos(photos.filter(p => p._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col md:flex-row">

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#1a1a1a] border-r border-white/5 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="text-xl font-black tracking-widest text-[#9bc7c5]">ADMIN<span className="text-orange-500">CP</span></div>
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-orange-600/10 text-orange-500 rounded-xl font-bold">
              <ImageIcon size={20} /> Gallery
            </button>
          </nav>
        </div>
        <button onClick={() => navigate("/")} className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors font-medium">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black">Photo Management</h1>
            <p className="text-gray-500 mt-1">Manage your ImageKit cloud assets</p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            <span className="text-sm text-gray-400">Total Assets:</span>
            <span className="text-xl font-bold text-[#9bc7c5]">{photos.length}</span>
          </div>
        </header>

        {/* Upload Zone */}
        <div
          className={`relative mb-12 p-10 border-2 border-dashed rounded-[2rem] transition-all flex flex-col items-center justify-center
            ${dragActive ? "border-orange-500 bg-orange-500/5" : "border-white/10 bg-white/[0.02]"}
          `}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); handleUpload(e.dataTransfer.files[0]); setDragActive(false); }}
        >
          <div className="w-16 h-16 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
            {uploading ? <div className="animate-spin border-2 border-t-transparent border-orange-500 rounded-full w-8 h-8"></div> : <Upload size={32} />}
          </div>
          <h2 className="text-xl font-bold">Drag & Drop to Upload</h2>
          <p className="text-gray-500 mt-2">or click to browse your files</p>
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => handleUpload(e.target.files[0])}
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo._id} className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 shadow-xl">
              <img src={photo.imageUrl} alt={photo.imageName} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(photo._id)}
                    className="p-3 bg-red-500/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div>
                  <p className="text-xs text-orange-500 font-mono mb-1">ID: {photo.fileId.substring(0, 10)}...</p>
                  <p className="text-white font-bold truncate">{photo.imageName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;