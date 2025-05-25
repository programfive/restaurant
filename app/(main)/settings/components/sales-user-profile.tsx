"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Save,
  X,
  Settings,
  Bell,
  Shield,
  Eye,
  Camera,
  Building,
  Briefcase,
  Award,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Crown,
  UserCheck,
  Clock,
  BarChart3,
  Percent,
  MapPinned,
} from "lucide-react"

type UserRole = "vendedor" | "administrador"

interface UserData {
  name: string
  email: string
  phone: string
  role: UserRole
  employeeId: string
  department: string
  territory: string
  manager: string
  hireDate: string
  commissionRate: number
  salesGoal: number
  currentSales: number
  bio: string
}

export default function SalesUserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<UserData>({
    name: "Carlos Mendoza",
    email: "carlos.mendoza@empresa.com",
    phone: "+34 612 345 678",
    role: "vendedor",
    employeeId: "EMP-2024-001",
    department: "Ventas Región Norte",
    territory: "Madrid y Comunidad",
    manager: "Ana Rodríguez",
    hireDate: "2024-01-15",
    commissionRate: 8.5,
    salesGoal: 150000,
    currentSales: 127500,
    bio: "Vendedor especializado en soluciones empresariales con 5 años de experiencia en el sector tecnológico.",
  })

  const salesProgress = (formData.currentSales / formData.salesGoal) * 100

  const handleSave = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los datos
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Aquí podrías revertir los cambios si es necesario
  }

  const getRoleBadge = (role: UserRole) => {
    if (role === "administrador") {
      return (
        <Badge variant="default" className="gap-1 bg-purple-600">
          <Crown className="w-3 h-3" />
          Administrador
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="gap-1">
        <UserCheck className="w-3 h-3" />
        Vendedor
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Header del perfil */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={formData.name} />
                  <AvatarFallback className="text-2xl">
                    {formData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold">{formData.name}</h1>
                  {getRoleBadge(formData.role)}
                  <Badge variant="outline" className="gap-1">
                    <Award className="w-3 h-3" />
                    Top Performer
                  </Badge>
                </div>
                <p className="text-muted-foreground">{formData.bio}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {formData.department}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinned className="w-4 h-4" />
                    {formData.territory}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Manager: {formData.manager}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Desde {new Date(formData.hireDate).toLocaleDateString("es-ES")}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit3 className="w-4 h-4" />
                    Editar perfil
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="gap-2">
                      <Save className="w-4 h-4" />
                      Guardar
                    </Button>
                    <Button variant="outline" onClick={handleCancel} className="gap-2">
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Métricas de ventas */}
          <div className="lg:col-span-1 space-y-6">
            {formData.role === "vendedor" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Meta de Ventas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>{salesProgress.toFixed(1)}%</span>
                    </div>
                    <Progress value={salesProgress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>€{formData.currentSales.toLocaleString()}</span>
                      <span>€{formData.salesGoal.toLocaleString()}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Ventas del mes</span>
                      </div>
                      <span className="font-semibold">€45,200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Crecimiento</span>
                      </div>
                      <span className="font-semibold text-green-600">+12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">Clientes</span>
                      </div>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">Comisión</span>
                      </div>
                      <span className="font-semibold">{formData.commissionRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Rendimiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Calificación</span>
                  </div>
                  <span className="font-semibold">4.8/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Tiempo resp.</span>
                  </div>
                  <span className="font-semibold">2.3h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Logros</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <span className="text-sm">Notificaciones</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Perfil visible</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">2FA</span>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Información personal y profesional */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información del empleado
                </CardTitle>
                <CardDescription>Datos personales y profesionales del sistema de ventas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email corporativo
                    </Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeId" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      ID Empleado
                    </Label>
                    <p className="text-sm text-muted-foreground">{formData.employeeId}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Rol
                    </Label>
                    {isEditing ? (
                      <Select
                        value={formData.role}
                        onValueChange={(value: UserRole) => setFormData({ ...formData, role: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vendedor">Vendedor</SelectItem>
                          <SelectItem value="administrador">Administrador</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-sm text-muted-foreground capitalize">{formData.role}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Departamento
                    </Label>
                    {isEditing ? (
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.department}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="territory" className="flex items-center gap-2">
                      <MapPinned className="w-4 h-4" />
                      Territorio
                    </Label>
                    {isEditing ? (
                      <Input
                        id="territory"
                        value={formData.territory}
                        onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.territory}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="manager" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Manager
                    </Label>
                    {isEditing ? (
                      <Input
                        id="manager"
                        value={formData.manager}
                        onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.manager}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hireDate" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Fecha de ingreso
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {new Date(formData.hireDate).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                </div>

                {formData.role === "vendedor" && (
                  <>
                    <Separator />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="commissionRate" className="flex items-center gap-2">
                          <Percent className="w-4 h-4" />
                          Tasa de comisión (%)
                        </Label>
                        {isEditing ? (
                          <Input
                            id="commissionRate"
                            type="number"
                            step="0.1"
                            value={formData.commissionRate}
                            onChange={(e) =>
                              setFormData({ ...formData, commissionRate: Number.parseFloat(e.target.value) })
                            }
                          />
                        ) : (
                          <p className="text-sm text-muted-foreground">{formData.commissionRate}%</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="salesGoal" className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Meta de ventas anual (€)
                        </Label>
                        {isEditing ? (
                          <Input
                            id="salesGoal"
                            type="number"
                            value={formData.salesGoal}
                            onChange={(e) => setFormData({ ...formData, salesGoal: Number.parseInt(e.target.value) })}
                          />
                        ) : (
                          <p className="text-sm text-muted-foreground">€{formData.salesGoal.toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="bio">Descripción profesional</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={3}
                      placeholder="Describe tu experiencia y especialización..."
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
