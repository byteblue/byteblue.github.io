import React, { useState, useMemo } from 'react';
import { Search, Menu, Github, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { techData } from './data';
import { TechItem, Category } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    '컴퓨터 과학 & 이론': true,
    '소프트웨어 공학 & 아키텍처': true,
    '프로그래밍 & 애플리케이션 개발': true,
    '운영체제 & 인프라': true,
    '데이터베이스 & 데이터 엔지니어링': true,
    '정보 보안': true,
    '인공지능 & 엣지 컴퓨팅': true,
  });

  const categories = Array.from(new Set(techData.map(t => t.category)));

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) return techData;
    return techData.filter(tech => 
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const groupedData = useMemo(() => {
    const group: Record<string, TechItem[]> = {};
    categories.forEach(cat => {
      group[cat] = filteredData.filter(t => t.category === cat);
    });
    return group;
  }, [filteredData, categories]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#1f6feb]/30">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d] z-20">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-1 text-[#8b949e] hover:text-[#c9d1d9]"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-[#c9d1d9] cursor-pointer" onClick={() => setSelectedTech(null)}>
            <BookOpen size={20} />
            <span className="font-semibold text-sm tracking-wide">Vibe Coding Wiki</span>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-md ml-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none text-[#8b949e]">
              <Search size={14} />
            </div>
            <input
              type="text"
              placeholder="Search wiki..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md py-1.5 pl-8 pr-3 text-sm text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 left-0 z-10
          w-72 bg-[#0d1117] border-r border-[#30363d] overflow-y-auto custom-scrollbar
          transform transition-transform duration-200 ease-in-out pt-14 md:pt-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <nav className="p-4 space-y-4">
            {categories.map(cat => {
              const items = groupedData[cat];
              if (items.length === 0) return null;
              const isExpanded = expandedCategories[cat];
              return (
                <div key={cat} className="space-y-1">
                  <button 
                    onClick={() => toggleCategory(cat)}
                    className="flex items-center justify-between w-full text-left font-semibold text-sm text-[#c9d1d9] hover:text-[#58a6ff] transition-colors py-1 group"
                  >
                    <span>{cat}</span>
                    {isExpanded ? (
                      <ChevronDown size={16} className="text-[#8b949e] group-hover:text-[#58a6ff]" />
                    ) : (
                      <ChevronRight size={16} className="text-[#8b949e] group-hover:text-[#58a6ff]" />
                    )}
                  </button>
                  {isExpanded && (
                    <ul className="pl-3 mt-1 space-y-1 border-l border-[#30363d]">
                      {items.map(item => (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              setSelectedTech(item);
                              setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                              selectedTech?.id === item.id
                                ? 'bg-[#1f6feb]/10 text-[#58a6ff] font-medium'
                                : 'text-[#8b949e] hover:bg-[#161b22] hover:text-[#c9d1d9]'
                            }`}
                          >
                            {item.name.split(' (')[0]}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#0d1117] p-6 md:p-10 custom-scrollbar">
          {selectedTech ? (
            <article className="max-w-4xl mx-auto">
              <div className="mb-6 pb-6 border-b border-[#30363d]">
                <div className="flex items-center gap-2 text-sm text-[#8b949e] mb-3">
                  <span>{selectedTech.category}</span>
                  <span>/</span>
                  <span className="text-[#c9d1d9]">{selectedTech.name.split(' (')[0]}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#c9d1d9] mb-4">
                  {selectedTech.name}
                </h1>
                <p className="text-lg text-[#8b949e]">
                  {selectedTech.shortDesc}
                </p>
              </div>

              <div className="space-y-8 text-[#c9d1d9]">
                <section>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-[#30363d] flex items-center gap-2">
                    기술 정의
                  </h2>
                  <div className="text-[15px] leading-relaxed text-[#c9d1d9]">
                    {selectedTech.definition}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-[#30363d] flex items-center gap-2">
                    아키텍처 역할
                  </h2>
                  <div className="text-[15px] leading-relaxed text-[#c9d1d9]">
                    {selectedTech.role}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-[#30363d] flex items-center gap-2">
                    실무 적용 가이드
                  </h2>
                  <div className="text-[15px] leading-relaxed text-[#c9d1d9] p-4 bg-[#161b22] border-l-4 border-[#238636] rounded-r-md">
                    {selectedTech.guide}
                  </div>
                </section>
              </div>
            </article>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto">
              <div className="w-16 h-16 mb-6 rounded-full bg-[#161b22] flex items-center justify-center border border-[#30363d]">
                <Github size={32} className="text-[#8b949e]" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Welcome to Vibe Coding Wiki</h2>
              <p className="text-[#8b949e] mb-6">
                좌측 사이드바에서 기술 스택을 선택하거나 검색하여 자세한 아키텍처 가이드와 실무 적용 방안을 확인하세요.
              </p>
              {searchQuery && (
                <p className="text-sm text-[#58a6ff]">
                  '{searchQuery}'에 대한 검색 결과가 {filteredData.length}건 있습니다.
                </p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-0 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
