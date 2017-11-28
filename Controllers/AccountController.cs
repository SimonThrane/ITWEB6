using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mime;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ITWEB6.Dtos;
using ITWEB6.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ITWEB6.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly FitnessBoysContext _context;

        public AccountController(UserManager<ApplicationUser> userManager,SignInManager<ApplicationUser> signInManager, FitnessBoysContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }
        public IActionResult Index()
        {
            throw new NotImplementedException();
        }

        [HttpPost("Login")]
        public async Task<IActionResult> JWTlogin([FromBody]UserDto userDto)
        {
            var user = await _userManager.FindByEmailAsync(userDto.Email);
            if (user == null)
            {
                ModelState.AddModelError(string.Empty, "Invalid login");
                return BadRequest(ModelState);
            }
            var passwordSignInResult = await _signInManager.CheckPasswordSignInAsync(user,
                userDto.Password, false);
          if (passwordSignInResult.Succeeded)
          {
              var result = new
              {
                token = GenerateToken(userDto.Email)
              };
            return new ObjectResult(result);

          }
      return BadRequest("Invalid login");
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] UserDto userDto)
        {
            var newUser = new ApplicationUser
            {
                UserName = userDto.Email,
                Email = userDto.Email
            };
            var userCreationResult = await _userManager.CreateAsync(newUser, userDto.Password);
            if (userCreationResult.Succeeded)
            {
              var result = new
              {
                token = GenerateToken(userDto.Email)
              };
                return new ObjectResult(result);
            }
            foreach (var error in userCreationResult.Errors)
                ModelState.AddModelError(string.Empty, error.Description);
            return BadRequest(ModelState);
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        private string GenerateToken(string username)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Nbf, new
                    DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, new
                    DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString()),
            };
            var token = new JwtSecurityToken(
                new JwtHeader(new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes("verylongsecretword")),
            SecurityAlgorithms.HmacSha256)),
            new JwtPayload(claims));
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
