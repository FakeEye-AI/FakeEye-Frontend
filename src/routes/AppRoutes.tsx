import { Routes, Route, Navigate } from 'react-router-dom';
import { ImageDetector } from '../pages/ImageDetector';
import { VideoDetector } from '../pages/VideoDetector';
import { TextDetector } from '../pages/TextDetector';
import { EmailDetector } from '../pages/EmailDetector';
import { ChromeExtension } from '../pages/ChromeExtension';
import { History } from '../pages/History';
import { Community } from '../pages/Community';
import { Auth } from '../pages/Auth';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/image" replace />} />
      <Route path="/image" element={<ImageDetector />} />
      <Route path="/video" element={<VideoDetector />} />
      <Route path="/text" element={<TextDetector />} />
      <Route path="/email" element={<EmailDetector />} />
      <Route path="/extension" element={<ChromeExtension />} />
      <Route path="/history" element={<History />} />
      <Route path="/community" element={<Community />} />
      <Route path="/auth" element={<Auth />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/image" replace />} />
    </Routes>
  );
}
