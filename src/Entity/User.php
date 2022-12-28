<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\UserRepository;
use App\State\UserPasswordHasher;
use App\State\UserStateProcessor;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
#[
    ApiResource(
        normalizationContext: ['groups' => ['users:read']],
        denormalizationContext: ['groups' => ['users:write']],
        operations: [
            new Get(),
            new Patch(
                processor: UserPasswordHasher::class,
            ),
            new Post(
                processor: UserPasswordHasher::class,
            ),
            new GetCollection()
        ]
    ),
    ApiFilter(
        SearchFilter::class,
        properties: [
            'email' => SearchFilter::STRATEGY_PARTIAL
        ]
    )
]
#[ApiFilter(SearchFilter::class, properties: [
    'email' => 'exact'
])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['users:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[NotBlank()]
    #[Groups(['users:read', 'users:write'])]
    private ?string $email = null;

    #[ORM\Column]
    #[NotNull()]
    #[Groups(['users:read', 'users:write'])]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[NotBlank()]
    #[Groups(['users:write'])]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[NotBlank()]
    #[Groups(['users:read', 'users:write'])]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    #[NotBlank()]
    #[Groups(['users:read', 'users:write'])]
    private ?string $lastName = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[NotBlank()]
    #[Groups(['users:read', 'users:write'])]
    private ?\DateTimeInterface $dateCreated = null;

    #[Groups(['users:read'])]
    #[ORM\OneToOne(mappedBy: 'user', cascade: ['persist', 'remove'])]
    private ?CustomerDetails $customerDetails = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->dateCreated;
    }

    public function setDateCreated(\DateTimeInterface $dateCreated): self
    {
        $this->dateCreated = $dateCreated;

        return $this;
    }

    public function getCustomerDetails(): ?CustomerDetails
    {
        return $this->customerDetails;
    }
}
