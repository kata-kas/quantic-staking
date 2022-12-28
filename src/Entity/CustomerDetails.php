<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Controller\CustomerDetailsPostAction;
use App\Repository\CustomerDetailsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[Vich\Uploadable]
#[ApiResource(
normalizationContext: ['groups' => ['customerDetails:read']],
denormalizationContext: ['groups' => ['customerDetails:write']],
operations: [ 
new Get(),
new GetCollection(),
new Patch(),
new Post(inputFormats: ['multipart' => ['multipart/form-data']])
]
)]
#[ORM\Entity(repositoryClass: CustomerDetailsRepository::class)]
class CustomerDetails
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['customerDetails:write'])]
    #[ORM\Column(length: 255)]
    private ?string $status = null;

    #[Groups(['customerDetails:write'])]
    #[ORM\Column(length: 255)]
    private ?string $addressCountry = null;

    #[Groups(['customerDetails:write'])]
    #[ORM\Column(length: 255)]
    private ?string $addressPostcode = null;

    #[Groups(['customerDetails:write'])]
    #[ORM\Column(length: 255)]
    private ?string $addressLine = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "passportPhotoPath")]
    #[Groups(['customerDetails:write'])]
    public ? File $file = null;
    
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $passportPhotoPath = null;

    #[Groups(['customerDetails:write'])]
    #[ORM\OneToOne(inversedBy: 'customerDetails')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getAddressCountry(): ?string
    {
        return $this->addressCountry;
    }

    public function setAddressCountry(string $addressCountry): self
    {
        $this->addressCountry = $addressCountry;

        return $this;
    }

    public function getAddressPostcode(): ?string
    {
        return $this->addressPostcode;
    }

    public function setAddressPostcode(string $addressPostcode): self
    {
        $this->addressPostcode = $addressPostcode;

        return $this;
    }

    public function getAddressLine(): ?string
    {
        return $this->addressLine;
    }

    public function setAddressLine(string $addressLine): self
    {
        $this->addressLine = $addressLine;

        return $this;
    }

    public function getPassportPhotoPath(): ?string
    {
        return $this->passportPhotoPath;
    }

    public function setPassportPhotoPath(string $passportPhotoPath): self
    {
        $this->passportPhotoPath = $passportPhotoPath;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
