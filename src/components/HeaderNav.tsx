import React from 'react';
import {
  Compass,
  Gamepad2,
  BookOpen,
  Heart,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { soundCtrl } from '../utils/audio';

export type ActiveAppView = '3d' | 'gallery' | 'games' | 'guide';

interface HeaderNavProps {
  currentView: ActiveAppView;
  onChangeView: (view: ActiveAppView) => void;
  onOpenFlowerOffering: () => void;
  offeredCount: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentView,
  onChangeView,
  onOpenFlowerOffering,
  offeredCount,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-stone-900/85 backdrop-blur-md border-b-2 border-amber-500/60 shadow-lg px-3 sm:px-6 py-2.5 flex items-center justify-between select-none">
      {/* Left: Logo & Branding */}
      <div className="flex items-center gap-3">
        <div className="relative group cursor-pointer" onClick={() => onChangeView('3d')}>
          <img
            src="/assets/aistudio/0-1_04aac2c3.jpg"
            alt="Không Gian Văn Hóa Hồ Chí Minh"
            className="h-10 sm:h-12 w-auto object-contain rounded-xl border border-amber-400 shadow-sm transition-transform group-hover:scale-105"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-extrabold text-amber-200 tracking-wide font-['Nunito']">
              Không Gian Văn Hóa Hồ Chí Minh
            </h1>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-600 text-white shadow-xs">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              Tiểu học
            </span>
          </div>
          <p className="text-[11px] text-amber-300/80 font-medium hidden sm:block">
            Mô phỏng 3D tương tác &amp; trò chơi lịch sử giáo dục vui nhộn
          </p>
        </div>
      </div>

      {/* Center/Right: Navigation View Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* 3D Room */}
        <button
          onClick={() => {
            soundCtrl.playChime(520);
            onChangeView('3d');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            currentView === '3d'
              ? 'bg-amber-400 text-stone-950 shadow-md font-extrabold ring-2 ring-amber-300'
              : 'bg-stone-800 text-amber-100 hover:bg-stone-700 border border-stone-700'
          }`}
        >
          <Compass className="w-4 h-4 text-amber-500" />
          <span className="hidden md:inline">Phòng 3D</span>
        </button>

        {/* History Games */}
        <button
          onClick={() => {
            soundCtrl.playChime(580);
            onChangeView('games');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            currentView === 'games'
              ? 'bg-amber-400 text-stone-950 shadow-md font-extrabold ring-2 ring-amber-300'
              : 'bg-stone-800 text-amber-100 hover:bg-stone-700 border border-stone-700'
          }`}
        >
          <Gamepad2 className="w-4 h-4 text-red-400" />
          <span>Trò chơi</span>
        </button>

        {/* 2D Gallery & Materials */}
        <button
          onClick={() => {
            soundCtrl.playChime(640);
            onChangeView('gallery');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            currentView === 'gallery'
              ? 'bg-amber-400 text-stone-950 shadow-md font-extrabold ring-2 ring-amber-300'
              : 'bg-stone-800 text-amber-100 hover:bg-stone-700 border border-stone-700'
          }`}
        >
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span>Tư liệu</span>
        </button>

        {/* Flower offering shortcut */}
        <button
          onClick={() => {
            soundCtrl.playChime(700);
            onOpenFlowerOffering();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
        >
          <Heart className="w-4 h-4 text-pink-200" />
          <span className="hidden sm:inline">Dâng hoa</span>
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">
            {offeredCount}
          </span>
        </button>

        {/* Guide button */}
        <button
          onClick={() => {
            soundCtrl.playChime(500);
            onChangeView('guide');
          }}
          className={`p-2 rounded-xl text-xs font-bold transition-all ${
            currentView === 'guide'
              ? 'bg-amber-400 text-stone-950'
              : 'bg-stone-800 text-amber-200 hover:bg-stone-700 border border-stone-700'
          }`}
          title="Hướng dẫn cho bé"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
