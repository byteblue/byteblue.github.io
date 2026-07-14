import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Layers, Cpu, Component, Code2, Server, Database, ShieldAlert, Bot } from 'lucide-react';
import { techData } from './data';
import { TechItem, Category } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'전체' | Category>('전체');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  // Filter Data
  const filteredData = useMemo(() => {
    return techData.filter((tech) => {
      const matchCategory = activeCategory === '전체' || tech.category === activeCategory;
      const matchSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTech(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = [
    { name: '전체', icon: Layers },
    { name: '컴퓨터 과학 & 이론', icon: Cpu },
    { name: '소프트웨어 공학 & 아키텍처', icon: Component },
    { name: '프로그래밍 & 애플리케이션 개발', icon: Code2 },
    { name: '운영체제 & 인프라', icon: Server },
    { name: '데이터베이스 & 데이터 엔지니어링', icon: Database },
    { name: '정보 보안', icon: ShieldAlert },
    { name: '인공지능 & 엣지 컴퓨팅', icon: Bot },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#020617] text-slate-100 font-sans">
      {/* Header */}
      <header className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 bg-slate-900/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Layers size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-black tracking-tight uppercase">
            바이브코딩 <span className="text-indigo-400">Wiki</span>
          </h1>
        </div>

        {/* Search */}
        <div className="flex items-center gap-4 flex-1 max-w-xl sm:mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="기술 이름 검색 (예: VPC, Redis...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </header>

      {/* Filters */}
      <nav className="px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide border-b border-slate-800 bg-slate-900/30">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name as any)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'active-gradient text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={14} />
              {cat.name}
            </button>
          );
        })}
      </nav>

      {/* Main Grid */}
      <main className="flex-1 p-6 overflow-y-auto bg-slate-950 custom-scrollbar">
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-slate-500 mb-4">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-medium text-slate-300">검색 결과가 없습니다</h3>
            <p className="text-slate-500 mt-2">다른 검색어나 카테고리를 선택해보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredData.map((tech) => (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className="glass-card p-4 rounded-2xl cursor-pointer flex flex-col justify-between group min-h-[160px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase tracking-widest font-bold">
                      {tech.category}
                    </span>
                    <Layers size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {tech.shortDesc}
                  </p>
                </div>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3].map(d => (
                    <div key={d} className="h-1 w-4 bg-slate-800 rounded-full group-hover:bg-indigo-500/50 transition-colors"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal Overlay */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col max-h-full"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 active-gradient"></div>
            
            <button 
              onClick={() => setSelectedTech(null)} 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} className="text-slate-300" />
            </button>
            
            <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar flex-1">
              <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">
                {selectedTech.category} 기술 정의
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-8 text-white uppercase">
                {selectedTech.name}
              </h2>
              
              <div className="space-y-8">
                <section>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-4 bg-indigo-500 rounded-full"></div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-tighter">[기술 정의]</h4>
                  </div>
                  <p className="text-slate-200 leading-relaxed pl-4">
                    {selectedTech.definition}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <div className="w-1.5 h-4 bg-cyan-400 rounded-full"></div>
                    <h4 className="text-xs font-bold uppercase tracking-tighter">[아키텍처 역할]</h4>
                  </div>
                  <p className="text-slate-200 leading-relaxed pl-4">
                    {selectedTech.role}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <div className="w-1.5 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xs font-bold uppercase tracking-tighter">[실무 적용 가이드]</h4>
                  </div>
                  <p className="text-slate-200 leading-relaxed pl-4">
                    {selectedTech.guide}
                  </p>
                </section>
              </div>
              
              <button 
                onClick={() => setSelectedTech(null)} 
                className="mt-12 w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-600/20"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
