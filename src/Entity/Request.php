<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\RequestRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: RequestRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['requests:read']],
    denormalizationContext: ['groups' => ['requests:write']],
    operations: [
        new Get(),
        new Patch(),
        new Post(),
        new GetCollection()
    ]
)]
class Request
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['requests:read'])]
    private ?int $id = null;

    #[ORM\Column]
     #[Groups(['requests:read', 'requests:write'])]
    private ?int $amount = null;

    #[ORM\Column(length: 255)]
     #[Groups(['requests:read', 'requests:write'])]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
     #[Groups(['requests:read', 'requests:write'])]
    private ?string $status = null;

    #[ORM\Column(length: 255)]
     #[Groups(['requests:read', 'requests:write'])]
    private ?string $hashTx = null;

    #[ORM\Column]
     #[Groups(['requests:read', 'requests:write'])]
    private ?int $duration = null;

    #[ORM\ManyToOne(inversedBy: 'requests')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['requests:read'])]
    private ?StakingPlan $stakingPlan = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
     #[Groups(['requests:read', 'requests:write'])]
    private ?\DateTimeInterface $dateCreated = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
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

    public function getHashTx(): ?string
    {
        return $this->hashTx;
    }

    public function setHashTx(string $hashTx): self
    {
        $this->hashTx = $hashTx;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getStakingPlan(): ?StakingPlan
    {
        return $this->stakingPlan;
    }

    public function setStakingPlan(?StakingPlan $stakingPlan): self
    {
        $this->stakingPlan = $stakingPlan;

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
}
