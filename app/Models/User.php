<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, SoftDeletes, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'username',
        'avatar',
        'sponsor_id',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    //Create A Permission
    public function createPermission($permission)
    {
        Permission::create(['name' => $permission]);
    }

    //Create A Role
    public function createRole($role)
    {
        Role::create(['name' => $role]);
    }

    //how to create a role using Spatie here
    public function assignRole($role)
    {
        $this->syncRoles([$role]);
    }

    //

    //how to create a permission using Spatie here
    public function givePermissionTo($permission)
    {
        $this->givePermissionTo([$permission]);
    }

    //how to check if a user has a role using Spatie here
    public function hasRole($role)
    {
        return $this->hasRole($role);
    }

    //how to check if a user has a permission using Spatie here
    public function hasPermissionTo($permission)
    {
        return $this->hasPermissionTo($permission);
    }

    //how to check if a user has any of the roles using Spatie here
    public function hasAnyRole($roles)
    {
        return $this->hasAnyRole($roles);
    }

    //how to check if a user has any of the permissions using Spatie here
    public function hasAnyPermission($permissions)
    {
        return $this->hasAnyPermission($permissions);
    }

    //how to check if a user has all of the roles using Spatie here
    public function hasAllRoles($roles)
    {
        return $this->hasAllRoles($roles);
    }

    //how to check if a user has all of the permissions using Spatie here
    public function hasAllPermissions($permissions)
    {
        return $this->hasAllPermissions($permissions);
    }

    //how to get all the roles of a user using Spatie here
    public function getRoles()
    {
        return $this->getRoleNames();
    }

    //how to get all the permissions of a user using Spatie here
    public function getPermissions()
    {
        return $this->getAllPermissions();
    }

    //relationship
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

}
