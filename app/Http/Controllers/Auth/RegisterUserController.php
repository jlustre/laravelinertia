namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class RegisterUserController extends Controller
{
    public function create()
    {
        $sponsor = request()->query('sponsor', null); // Retrieve sponsor from query parameters
        return Inertia::render('auth/register', [
            'sponsor' => $sponsor,
        ]);
    }
}
