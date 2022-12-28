<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\CurrencyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: CurrencyRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['currency:read']],
    denormalizationContext: ['groups' => ['currency:write']],
    operations: [ 
        new Get(),
        new GetCollection(),
        new Patch(),
        new Post(inputFormats: ['multipart' => ['multipart/form-data']])
    ]
)]
class Currency
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['currency:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['currency:write', 'currency:read', 'stakingPlans:read', 'requests:read'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['currency:write', 'currency:read', 'stakingPlans:read', 'requests:read'])]
    private ?string $token = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "imagePath")]
    #[Groups(['currency:write'])]
    public ? File $file = null;

    #[ORM\Column(length: 255)]
    #[Groups(['currency:read', 'stakingPlans:read', 'requests:read'])]
    private ?string $imagePath = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    public function setImagePath(string $imagePath): self
    {
        $this->imagePath = $imagePath;

        return $this;
    }
}
