﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Movie.WEBUI.ViewModels;
using Movies.BLL.Services;
using Movies.BLL.Services.Interfaces;
using Movies.DAL.Data;
using Movies.DAL.DbModel;
using Movies.DAL.Dtos;

namespace Movie.WEBUI.Controllers
{
	public class MoviesController : Controller
	{
        private readonly AppDbContext _context;
        public MoviesController(AppDbContext context)
        {
            _context = context;
        }


        public IActionResult Index(int PageIndex=1, int pagSize=12, HomeViewModel vmm = null)
        {
            var vm = new HomeViewModel();

            vm.FilterFormModel = vmm.FilterFormModel;

            var movies =  _context.Movies.Include(p => p.GenresCategory).Include(p => p.CountryCategory)
                .Include(p => p.Trend).Include(p => p.LanguageCategory);
            if (vm.FilterFormModel != null)
            {
                
                movies = _context.Movies.Where(p => p.GenresCategoryId == vm.FilterFormModel.GenresCategoryId && p.CountryCategoryId == vm.FilterFormModel.CountryCategoryId && p.LanguageCategoryId == vm.FilterFormModel.LanguageCategoryId).Include(p => p.GenresCategory).Include(p => p.CountryCategory)
                .Include(p => p.Trend).Include(p => p.LanguageCategory);


            }
            vm.PagedViewModel = new PagedViewModel<MovieC>(movies, PageIndex, pagSize);

            vm.GenresCategories = _context.GenresCategories.ToList();
            vm.CountryCategories = _context.CountryCategories.ToList();
            vm.LanguageCategories = _context.LanguageCategories.ToList();

            return View(vm);

        }

        [HttpPost]
        public async Task<IActionResult> RateMovie(int movieId, double rating)
        {
            var movie =await _context.Movies.AsNoTracking().FirstOrDefaultAsync(m => m.Id == movieId);
            if (movie != null)
            {
                _context.Entry(movie).State = EntityState.Modified;
                movie.RatingSum += rating;
                movie.RatingCount++;
               await _context.SaveChangesAsync();

                var newAverageRating = movie.RatingCount > 0 ? movie.RatingSum / movie.RatingCount : 0;
                return Json(new { newAverageRating = newAverageRating.ToString("0.0") });
            }

            return NotFound();
        }



    }
}
