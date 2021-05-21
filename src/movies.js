import React from 'react';
import Logo from './components/logo';
import LogoMovies from './components/logoMovies';
import QuickSearch from './components/quickSearch';
import Navigation from './components/navigation';
import MovieNumber from './components/movieNumber';
import PosterRaya from './components/poster';
import TitleRusRaya from './components/titleRus';
import TitleEngRaya from './components/titleEng';
import GenresRaya from './components/genres';
import DescriptionRaya from './components/descripton';
import DownloadButton from './components/downloadButton';
import WatchlistButton from './components/watchlistButton';
import RaitingButton from './components/raitingButton';
import Raiting from './components/raiting';
import Rule from './components/rule';
import Icons from './components/icons';
import MoviesFooter from './components/moviesFooter';
import SearchMovies from './components/searchMovies';
import Filter from './components/filter';
import MoviesHeading from './components/moviesHeading';

const Movies = () => {
  return (
    <div>
      <header>
          <Logo/>
          <LogoMovies/>
          <QuickSearch/>
          <Navigation/>
      </header>
      <main>
        <div>
          <MoviesHeading/>
          <SearchMovies/>
          <Filter/>
          <section>
            <MovieNumber/>
            <PosterRaya/>
            <div>
              <TitleRusRaya/>
              <TitleEngRaya/>
              <GenresRaya/>
              <DescriptionRaya/>
            </div> 
            <WatchlistButton/>
            <RaitingButton/>
            <Raiting/>
          </section>
        </div>
        <DownloadButton/>
        <Rule/>
        <div>
          <section>
            <MovieNumber/>
            <PosterRaya/>
            <div>
              <TitleRusRaya/>
              <TitleEngRaya/>
              <GenresRaya/>
              <DescriptionRaya/>
            </div> 
            <WatchlistButton/>
            <RaitingButton/>
            <Raiting/>
          </section>
        </div>
        <DownloadButton/>
      </main>
      <footer>
        <Icons/>
        <MoviesFooter/>
      </footer>
    </div>
  )
};

export default Movies;