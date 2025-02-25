import React from 'react'

const Header = () => {
  return (
    <div>

<header className="bg-dark-secondary py-4 px-6 flex items-center justify-center">
<div className="w-full max-w-6xl flex items-center justify-between">

  <div className="flex items-center space-x-4">
    <h1 className="font-['Orbitron'] text-2xl font-bold text-accent-teal">
      NODO Movies 🎬
    </h1>
  </div>

  <div className="flex items-center space-x-4">
    <button id="openWatchlist"
      className="text-text-primary text-xl font-semibold hover:text-accent-teal transition-colors duration-300">
      Watchlist
    </button>

    <i className="ph ph-user-circle text-4xl text-accent-teal hover:text-button-primary-hover cursor-pointer transition-colors duration-300"></i>
  </div>
</div>
</header>
    </div>
  )
}

export default Header


